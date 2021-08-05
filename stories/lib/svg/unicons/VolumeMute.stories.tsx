import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VolumeMute, VolumeMutePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VolumeMute",
  component: VolumeMute,
} as ComponentMeta<typeof VolumeMute>;

const Template: ComponentStory<typeof VolumeMute> = (
  args: VolumeMutePropsI
) => (
  <x.div display="flex" gap="20px">
    <VolumeMute {...args} />
    <VolumeMute {...args} fill="red.500" />
    <VolumeMute {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
