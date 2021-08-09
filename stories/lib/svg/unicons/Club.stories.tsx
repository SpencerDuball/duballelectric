import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Club, ClubPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Club",
  component: Club,
} as ComponentMeta<typeof Club>;

const Template: ComponentStory<typeof Club> = (args: ClubPropsI) => (
  <x.div display="flex" gap="20px">
    <Club {...args} />
    <Club {...args} fill="red.500" />
    <Club {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
