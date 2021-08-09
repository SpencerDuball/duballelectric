import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ban, BanPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ban",
  component: Ban,
} as ComponentMeta<typeof Ban>;

const Template: ComponentStory<typeof Ban> = (args: BanPropsI) => (
  <x.div display="flex" gap="20px">
    <Ban {...args} />
    <Ban {...args} fill="red.500" />
    <Ban {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
