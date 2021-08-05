import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EditAlt, EditAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EditAlt",
  component: EditAlt,
} as ComponentMeta<typeof EditAlt>;

const Template: ComponentStory<typeof EditAlt> = (args: EditAltPropsI) => (
  <x.div display="flex" gap="20px">
    <EditAlt {...args} />
    <EditAlt {...args} fill="red.500" />
    <EditAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
