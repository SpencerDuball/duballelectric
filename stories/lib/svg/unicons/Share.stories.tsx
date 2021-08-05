import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Share, SharePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Share",
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args: SharePropsI) => (
  <x.div display="flex" gap="20px">
    <Share {...args} />
    <Share {...args} fill="red.500" />
    <Share {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
