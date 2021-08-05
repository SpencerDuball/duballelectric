import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserArrows, UserArrowsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UserArrows",
  component: UserArrows,
} as ComponentMeta<typeof UserArrows>;

const Template: ComponentStory<typeof UserArrows> = (
  args: UserArrowsPropsI
) => (
  <x.div display="flex" gap="20px">
    <UserArrows {...args} />
    <UserArrows {...args} fill="red.500" />
    <UserArrows {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
